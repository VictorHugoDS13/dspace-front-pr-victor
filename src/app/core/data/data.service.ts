import { ObjectCacheService } from "../cache/object-cache.service";
import { ResponseCacheService } from "../cache/response-cache.service";
import { CacheableObject } from "../cache/object-cache.reducer";
import { hasValue, isNotEmpty } from "../../shared/empty.util";
import { RemoteData } from "./remote-data";
import { FindAllOptions, FindAllRequest, FindByIDRequest, Request } from "./request.models";
import { Store } from "@ngrx/store";
import { RequestConfigureAction, RequestExecuteAction } from "./request.actions";
import { CoreState } from "../core.reducers";
import { RequestService } from "./request.service";
import { RemoteDataBuildService } from "../cache/builders/remote-data-build.service";
import { GenericConstructor } from "../shared/generic-constructor";
import { Inject } from "@angular/core";
import { GLOBAL_CONFIG, GlobalConfig } from "../../../config";
import { RESTURLCombiner } from "../url-combiner/rest-url-combiner";

export abstract class DataService<TNormalized extends CacheableObject, TDomain> {
  protected abstract objectCache: ObjectCacheService;
  protected abstract responseCache: ResponseCacheService;
  protected abstract requestService: RequestService;
  protected abstract rdbService: RemoteDataBuildService;
  protected abstract store: Store<CoreState>;
  protected abstract endpoint: string;

  constructor(
    private normalizedResourceType: GenericConstructor<TNormalized>,
    protected EnvConfig: GlobalConfig
  ) {

  }

  protected getFindAllHref(options: FindAllOptions = {}): string {
    let result = this.endpoint;
    let args = [];

    if (hasValue(options.scopeID)) {
      args.push(`scope=${options.scopeID}`);
    }

    if (hasValue(options.currentPage)) {
      args.push(`page=${options.currentPage}`);
    }

    if (hasValue(options.elementsPerPage)) {
      args.push(`size=${options.elementsPerPage}`);
    }

    if (hasValue(options.sort)) {
      args.push(`sort=${options.sort.field},${options.sort.direction}`);
    }

    if (isNotEmpty(args)) {
      result = `${result}?${args.join('&')}`;
    }
    return new RESTURLCombiner(this.EnvConfig, result).toString();
  }

  findAll(options: FindAllOptions = {}): RemoteData<Array<TDomain>> {
    const href = this.getFindAllHref(options);
    const request = new FindAllRequest(href, options);
    this.requestService.configure(request);
    return this.rdbService.buildList<TNormalized, TDomain>(href, this.normalizedResourceType);
    // return this.rdbService.buildList(href);
  }

  protected getFindByIDHref(resourceID): string {
    return new RESTURLCombiner(this.EnvConfig, `${this.endpoint}/${resourceID}`).toString();
  }

  findById(id: string): RemoteData<TDomain> {
    const href = this.getFindByIDHref(id);
    const request = new FindByIDRequest(href, id);
    this.requestService.configure(request);
    return this.rdbService.buildSingle<TNormalized, TDomain>(href, this.normalizedResourceType);
    // return this.rdbService.buildSingle(href);
  }

  findByHref(href: string): RemoteData<TDomain> {
    this.requestService.configure(new Request(href));
    return this.rdbService.buildSingle<TNormalized, TDomain>(href, this.normalizedResourceType);
    // return this.rdbService.buildSingle(href));
  }

}
