webpackJsonp([1,4],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_STORE; });

var APP_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* OpaqueToken */]('app.store');
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app-store.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decrement; });
var INCREMENT = 'INCREMENT';
var increment = function () { return ({
    type: INCREMENT
}); };
var DECREMENT = 'DECREMENT';
var decrement = function () { return ({
    type: DECREMENT
}); };
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/CounterActions.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(title, link, votes, id) {
        this.id = id || 0;
        this.votes = votes || 0;
        this.title = title;
        this.link = link;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
    };
    Article.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/article.model.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesList; });
var ArticlesList = (function () {
    function ArticlesList(id) {
        this.id = id || 0;
        this.articles = [];
    }
    ArticlesList.prototype.addArticle = function (article) {
        while (this.thisIdWas(article.id)) {
            article.id += 1;
        }
        this.articles.push(article);
        console.log('Article was added: ', article);
    };
    ArticlesList.prototype.addArticles = function (arrayOfArticles) {
        for (var i in arrayOfArticles) {
            this.addArticle(arrayOfArticles[i]);
        }
    };
    ArticlesList.prototype.deleteArticle = function (article) {
        var index = this.articles.indexOf(article);
        if (index != -1) {
            this.articles.splice(index, 1);
            console.log('Article was deleted: ', article);
        }
    };
    ArticlesList.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return (b.votes == a.votes ? a.id - b.id : b.votes - a.votes); });
    };
    ArticlesList.prototype.thisIdWas = function (id) {
        for (var i in this.articles) {
            if (this.articles[i].id == id) {
                return true;
            }
        }
        return false;
    };
    return ArticlesList;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/articles-list.model.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_result_search_result_model__ = __webpack_require__(531);
/* unused harmony export YOUTUBE_API_KEY */
/* unused harmony export YOUTUBE_API_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return youTubeServiceInjectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouTubeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var YOUTUBE_API_KEY = 'AIzaSyAqfLywDm8g9zq8mvYSPi7DFcWtB56jqZY';
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var youTubeServiceInjectable = [
    { provide: YouTubeService, useClass: YouTubeService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];
var YouTubeService = (function () {
    function YouTubeService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    YouTubeService.prototype.search = function (query) {
        var params = [
            ("q=" + query),
            ("key=" + this.apiKey),
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response.json().items.map(function (item) {
                // console.log("raw item", item); // uncomment if you want to debug
                return new __WEBPACK_IMPORTED_MODULE_2__components_search_result_search_result_model__["a" /* SearchResult */]({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YouTubeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(YOUTUBE_API_KEY)),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(YOUTUBE_API_URL)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, String, String])
    ], YouTubeService);
    return YouTubeService;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/you-tube.service.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "female-avatar-1.78beeed9786bb8b57a41.png";

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 412;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(521);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/main.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_THREAD", function() { return ADD_THREAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addThread", function() { return addThread; });
var ADD_THREAD = '[Thread] Add';
var addThread = function (thread) { return ({
    type: ADD_THREAD,
    thread: thread
}); };
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/ThreadActions.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
var SET_CURRENT_USER = '[User] Set Current';
var setCurrentUser = function (user) { return ({
    type: SET_CURRENT_USER,
    user: user
}); };
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/UserActions.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserActions__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThreadActions__ = __webpack_require__(517);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__UserActions__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ThreadActions__; });



/* unused harmony default export */ var _unused_webpack_default_export = {
    UserActions: __WEBPACK_IMPORTED_MODULE_0__UserActions__,
    ThreadActions: __WEBPACK_IMPORTED_MODULE_1__ThreadActions__
};
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/index.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_articles_list_articles_list_model__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.articles = new __WEBPACK_IMPORTED_MODULE_2__components_articles_list_articles_list_model__["a" /* ArticlesList */];
        this.articles.addArticles([
            new __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__["a" /* Article */]('start page', 'https://trishi-ri.github.io'),
            new __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__["a" /* Article */]('my todo-list', 'https://github.com/trishi-ri/MyToDoList')
        ]);
    }
    AppComponent.prototype.addArticle = function (newArticle) {
        console.log("Adding article with title: " + newArticle['title'] + " and link: " + newArticle['link']);
        this.articles.addArticle(new __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__["a" /* Article */](newArticle['title'], newArticle['link']));
        return false;
    };
    AppComponent.prototype.articleWasSelected = function (article) {
        console.log('Article clicked: ', article);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(707),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_article_article_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_articles_list_articles_list_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_create_article_form_create_article_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_simple_http_simple_http_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_box_search_box_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_result_search_result_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_youtube_search_youtube_search_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_http_requests_http_requests_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_counter_counter_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_store__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reducers_CounterReducer__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_redux__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__ = __webpack_require__(525);
/* unused harmony export store */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var devTools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
function store() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_17__reducers_CounterReducer__["a" /* counterReducer */], devTools);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_articles_list_articles_list_component__["a" /* ArticlesListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_form_create_article_form_create_article_component__["a" /* FormCreateArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_simple_http_simple_http_component__["a" /* SimpleHttpComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_search_box_search_box_component__["a" /* SearchBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_youtube_search_youtube_search_component__["a" /* YoutubeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_http_requests_http_requests_component__["a" /* HttpRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__["a" /* YouTubeService */], __WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__["b" /* youTubeServiceInjectable */],
                { provide: __WEBPACK_IMPORTED_MODULE_16__app_store__["a" /* APP_STORE */], useFactory: store }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_model__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ArticleComponent.prototype.voteUp = function (event) {
        this.article.voteUp();
        event.stopPropagation();
    };
    ArticleComponent.prototype.voteDown = function (event) {
        this.article.voteDown();
        event.stopPropagation();
    };
    ArticleComponent.prototype.deleteArticle = function (event) {
        console.log(event);
        this.onDelete.emit(this.article);
        event.stopPropagation();
        // event.preventDefault();
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ArticleComponent.prototype, "onDelete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */]) === 'function' && _b) || Object)
    ], ArticleComponent.prototype, "article", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ArticleComponent.prototype, "selected", void 0);
    ArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__(708),
            styles: [__webpack_require__(689)],
            host: { 'class': 'list-group-item' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/article.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_list_model__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesListComponent = (function () {
    function ArticlesListComponent() {
        this.onArticleSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ArticlesListComponent.prototype.sortedArticles = function () {
        return this.articles.sortedArticles();
    };
    ArticlesListComponent.prototype.clicked = function (article) {
        if (this.currentArticle == article) {
            this.currentArticle = null;
        }
        else {
            this.currentArticle = article;
        }
        this.onArticleSelected.emit(article);
    };
    ArticlesListComponent.prototype.addArticle = function (article) {
        this.articles.addArticle(article);
    };
    ArticlesListComponent.prototype.addArticles = function (arrayOfArticles) {
        this.articles.addArticles(arrayOfArticles);
    };
    ArticlesListComponent.prototype.deleteArticle = function (article) {
        this.articles.deleteArticle(article);
    };
    ArticlesListComponent.prototype.isSelected = function (article) {
        if (!article || !this.currentArticle) {
            return false;
        }
        return article.id === this.currentArticle.id;
    };
    ArticlesListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__articles_list_model__["a" /* ArticlesList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__articles_list_model__["a" /* ArticlesList */]) === 'function' && _a) || Object)
    ], ArticlesListComponent.prototype, "articles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ArticlesListComponent.prototype, "onArticleSelected", void 0);
    ArticlesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-articles-list',
            template: __webpack_require__(709),
            styles: [__webpack_require__(690)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesListComponent);
    return ArticlesListComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/articles-list.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_uuid__ = __webpack_require__(535);
/* harmony export (immutable) */ __webpack_exports__["a"] = ChatExampleData;


var me = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    isClient: true,
    name: 'Me',
    avatarSrc: __webpack_require__(411)
};
var wait = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    name: 'Waiting Bot',
    avatarSrc: __webpack_require__(998)
};
var tWait = {
    id: 'tWait',
    name: wait.name,
    avatarSrc: wait.avatarSrc,
    messages: []
};
function ChatExampleData(store) {
    // set the current User
    store.dispatch(__WEBPACK_IMPORTED_MODULE_0__actions__["a" /* UserActions */].setCurrentUser(me));
    // create a new thread
    store.dispatch(__WEBPACK_IMPORTED_MODULE_0__actions__["b" /* ThreadActions */].addThread(tWait));
}
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/ChatExampleData.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_store__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatExampleData__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ChatComponent = (function () {
    function ChatComponent(store) {
        this.store = store;
        this.today = Date.now();
        this.defaultAvatar = (window.__karma__) ? '' : __webpack_require__(411);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ChatExampleData__["a" /* default */])(store);
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__(710),
            styles: [__webpack_require__(691)],
            host: { 'class': 'block-of-information' }
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_store__["a" /* APP_STORE */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_redux__["Store"]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/chat.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_store__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_CounterActions__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CounterComponent = (function () {
    function CounterComponent(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.readState(); });
        this.readState();
    }
    CounterComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.counter = state.counter;
    };
    CounterComponent.prototype.increment = function () {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions_CounterActions__["a" /* increment */]());
    };
    CounterComponent.prototype.decrement = function () {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions_CounterActions__["b" /* decrement */]());
    };
    CounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-counter',
            template: __webpack_require__(711),
            styles: [__webpack_require__(692)],
            host: { 'class': 'block-of-information' }
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_store__["a" /* APP_STORE */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_redux__["Store"]) === 'function' && _a) || Object])
    ], CounterComponent);
    return CounterComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/counter.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCreateArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormCreateArticleComponent = (function () {
    function FormCreateArticleComponent(fb) {
        this.myForm = fb.group({
            'title': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'link': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, linkValidator
                ])]
        });
        this.link = this.myForm.controls['link'];
        this.link.valueChanges.subscribe(function (value) {
            console.log('link changed to: ', value);
        });
        this.myForm.valueChanges.subscribe(function (form) {
            console.log('form changed to: ', form);
        });
        this.onArticleValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    FormCreateArticleComponent.prototype.onSubmit = function (value) {
        if (this.myForm.invalid) {
            return;
        }
        console.log('you submitted value: ', value);
        this.onArticleValid.emit({ 'title': this.title, 'link': this.link.value });
        this.myForm.reset();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], FormCreateArticleComponent.prototype, "onArticleValid", void 0);
    FormCreateArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'form-create-article',
            template: __webpack_require__(712),
            styles: [__webpack_require__(693)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], FormCreateArticleComponent);
    return FormCreateArticleComponent;
    var _a, _b;
}());
function linkValidator(control) {
    if (control.value && !control.value.match(/^http/)) {
        return { invalidLink: true };
    }
}
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/form-create-article.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestsComponent = (function () {
    function HttpRequestsComponent(http) {
        this.http = http;
    }
    HttpRequestsComponent.prototype.makePost = function () {
        var _this = this;
        this.loading = true;
        this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({
            body: 'bar',
            title: 'foo',
            userId: 1
        }))
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    HttpRequestsComponent.prototype.makeDelete = function () {
        var _this = this;
        this.loading = true;
        this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    HttpRequestsComponent.prototype.makeHeaders = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('X-API-TOKEN', 'ng-book');
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    HttpRequestsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-http-requests',
            template: __webpack_require__(713),
            styles: [__webpack_require__(694)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpRequestsComponent);
    return HttpRequestsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/http-requests.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBoxComponent = (function () {
    function SearchBoxComponent(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // convert the `keyUp` event into an observable stream
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) // extract the value of the input
            .filter(function (text) { return text.length > 1; }) // filter out if empty
            .debounceTime(250) // only once every 250ms
            .do(function () { return _this.loading.next(true); }) // enable loading
            .map(function (query) { return _this.youtube.search(query); })
            .switch()
            .subscribe(function (results) {
            _this.loading.next(false);
            _this.results.next(results);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            outputs: ['loading', 'results'],
            selector: 'app-search-box',
            template: __webpack_require__(714),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__["a" /* YouTubeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__["a" /* YouTubeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object])
    ], SearchBoxComponent);
    return SearchBoxComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/search-box.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            inputs: ['result'],
            selector: 'app-search-result',
            template: __webpack_require__(715),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/search-result.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
            "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/search-result.model.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleHttpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleHttpComponent = (function () {
    function SimpleHttpComponent(http) {
        this.http = http;
    }
    SimpleHttpComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    SimpleHttpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-simple-http',
            template: __webpack_require__(716),
            styles: [__webpack_require__(697)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SimpleHttpComponent);
    return SimpleHttpComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/simple-http.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeSearchComponent = (function () {
    function YoutubeSearchComponent() {
        this.loadingGif = (window.__karma__) ? '' : __webpack_require__(999);
    }
    YoutubeSearchComponent.prototype.updateResults = function (results) {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    };
    YoutubeSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-youtube-search',
            template: __webpack_require__(717),
            styles: [__webpack_require__(698)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [])
    ], YoutubeSearchComponent);
    return YoutubeSearchComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/youtube-search.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_CounterActions__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return counterReducer; });

var initialState = { counter: 0 };
// Create our reducer that will handle changes to the state
var counterReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_CounterActions__["c" /* INCREMENT */]:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case __WEBPACK_IMPORTED_MODULE_0__actions_CounterActions__["d" /* DECREMENT */]:
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
};
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/CounterReducer.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
// taken from TodoMVC
function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/uuid.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/environment.js.map

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".block-of-information {\r\n  display: block;\r\n  position: relative;\r\n  margin: 5px;\r\n  border: solid 1px black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".additional-group {\r\n  display: none;\r\n}\r\n\r\n.additional-group.displayed {\r\n  display: block;\r\n}\r\n\r\n.list-group-item-heading {\r\n  padding: 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n#buttonDelete {\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".list-group-item {\r\n  margin: 10px 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.list-group-item.selected {\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n\r\n.list-group-item:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.list-group {\r\n  background-color: gray;\r\n  padding: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.divider {\r\n  position: absolute;\r\n  width: 5px;\r\n  height: 100%;\r\n  top: 0;\r\n  border-left: 2px solid #e5e5e5;\r\n  margin-left: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "/*Only display content to screen readers*/\r\n/*See: http://a11yproject.com/posts/how-to-hide-content*/\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n\r\n.inputField {\r\n  margin: 5px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\nform {\r\n  margin: 5px;\r\n}\r\n\r\n.list-group.validator-messages {\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <!-- Nav tabs -->\r\n  <ul class=\"nav nav-tabs\">\r\n    <li class=\"active\"><a href=\"#home\" aria-controls=\"home\" data-toggle=\"tab\">Articles</a></li>\r\n    <li><a href=\"#httpRequests\" aria-controls=\"httpRequests\" data-toggle=\"tab\">http requests</a></li>\r\n    <li><a href=\"#youtubeSearch\" aria-controls=\"youtubeSearch\" data-toggle=\"tab\">youtube search</a></li>\r\n    <li><a href=\"#testRedux\" aria-controls=\"testRedux\" data-toggle=\"tab\">test Redux</a></li>\r\n    <li><a href=\"#chat\" aria-controls=\"chat\" data-toggle=\"tab\">chat</a></li>\r\n  </ul>\r\n\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n\r\n    <div class=\"tab-pane active\" id=\"home\">\r\n      <div class=\"col-sm-4 col-md-2 sidebar\">\r\n        <form-create-article\r\n          (onArticleValid)=\"addArticle($event)\">\r\n        </form-create-article>\r\n      </div>\r\n      <div class=\"col-sm-4 col-md-5 main\">\r\n        <app-articles-list\r\n          [articles]=\"articles\"\r\n          (onArticleSelected)=\"articleWasSelected($event)\">\r\n        </app-articles-list>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane\" id=\"httpRequests\">\r\n      <div class=\"col-sm-4 col-md-5\">\r\n        <app-simple-http></app-simple-http>\r\n      </div>\r\n      <div class=\"col-sm-4 col-md-5\">\r\n        <app-http-requests></app-http-requests>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane\" id=\"youtubeSearch\">\r\n      <app-youtube-search></app-youtube-search>\r\n    </div>\r\n\r\n    <div class=\"tab-pane\" id=\"testRedux\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-4\">\r\n          <app-counter></app-counter>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane\" id=\"chat\">\r\n      <app-chat></app-chat>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<span class=\"label label-default\">\r\n  #{{article.id}}\r\n</span>\r\n<span class=\"badge\">\r\n  {{article.votes}}\r\n</span>\r\n<span class=\"list-group-item-heading\">\r\n  {{article.title}}\r\n</span>\r\n<span>({{article.domain()}})</span>\r\n<div [class.displayed]=\"selected\" class=\"additional-group\">\r\n  <p>\r\n    <a class=\"list-group-item-text\" href=\"{{article.link}}\">\r\n      {{article.link}}\r\n    </a>\r\n  </p>\r\n\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteUp($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span>\r\n      Up\r\n    </button>\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteDown($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span>\r\n      Down\r\n    </button>\r\n  </div>\r\n  <button type=\"button\"\r\n          class=\"btn btn-default\"\r\n          id=\"buttonDelete\"\r\n          (click)=\"deleteArticle($event)\">\r\n    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n    Delete\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"divider\"></div>\r\n  <app-article\r\n    *ngFor=\"let NextArticle of articles.sortedArticles()\"\r\n    [article]=\"NextArticle\"\r\n    (click)=\"clicked(NextArticle)\"\r\n    (onDelete)=\"deleteArticle($event)\"\r\n    [class.selected]=\"isSelected(NextArticle)\"\r\n    [selected]=\"isSelected(NextArticle)\">\r\n  </app-article>\r\n</div>\r\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3 col-md-3\"></div>\n  <div class=\"col-sm-2 col-md-2\">\n    <div class=\"list-group well\">\n      <a href=\"#\" class=\"list-group-item active\">Wait</a>\n      <a href=\"#\" class=\"list-group-item\">test-test <span class=\"badge\">2</span></a>\n      <a href=\"#\" class=\"list-group-item\">Echo</a>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4\">\n    <div class=\"media well\">\n      <div class=\"media-body\">\n        <form>\n          <div class=\"panel panel-default\" style=\"\n          margin-bottom: 0;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\">\n            <div class=\"panel-heading\">{{today | date}}</div>\n            <div class=\"panel-body\" style=\"\n            height: 100px;\">\n              <p>[{{today | date:'shortTime'}}] test text</p>\n            </div>\n            <div class=\"panel-footer\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Type text there.\">\n                <span class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"button\">Send!</button>\n            </span>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"media-right media-middle well\" style=\"\n      position: relative;\n      left: -1px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\">\n        <img class=\"media-object\" src=\"{{defaultAvatar}}\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3 col-md-3\"></div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n  <div class=\"caption\">\n    <h3>Counter</h3>\n    <p>Custom Store</p>\n\n    <p>\n      The counter value is:\n      <b>{{ counter }}</b>\n    </p>\n\n    <p>\n      <button (click)=\"increment()\"\n              class=\"btn btn-primary\">\n        Increment\n      </button>\n      <button (click)=\"decrement()\"\n              class=\"btn btn-default\">\n        Decrement\n      </button>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\"\r\n      (ngSubmit)=\"onSubmit(myForm.value)\">\r\n\r\n  <h3 class=\"ui header\">new article</h3>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputTitle\" class=\"sr-only\">Title</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputTitle\"\r\n           placeholder=\"Title\"\r\n           required\r\n           [formControl]=\"myForm.get('title')\"\r\n           [(ngModel)]=\"title\"\r\n           name=\"title\">\r\n    <div *ngIf=\"myForm.get('title').hasError('required') && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Title is required\r\n    </div>\r\n    <div *ngIf=\"myForm.get('title').valid && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Title is ok\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputLink\" class=\"sr-only\">Link</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputLink\"\r\n           placeholder=\"Link\"\r\n           required\r\n           [formControl]=\"myForm.controls['link']\"\r\n           name=\"link\">\r\n    <div *ngIf=\"link.hasError('required') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link is required\r\n    </div>\r\n    <div *ngIf=\"link.hasError('invalidLink') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link must begin with 'http'\r\n    </div>\r\n    <div *ngIf=\"link.valid && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Link is ok\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\"\r\n          id=\"submitButton\"\r\n          class=\"btn btn-default btn-block\">\r\n    Submit\r\n  </button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<h2>More Requests</h2>\n<button type=\"button\" (click)=\"makePost()\">Make Post</button>\n<button type=\"button\" (click)=\"makeDelete()\">Make Delete</button>\n<button type=\"button\" (click)=\"makeHeaders()\">Make Headers</button>\n<div *ngIf=\"loading\">loading...</div>\n<pre>{{data | json}}</pre>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-2\">\n  <div class=\"thumbnail\">\n    <img src=\"{{result.thumbnailUrl}}\" title=\"{{result.title}}\">\n    <div class=\"caption\">\n      <!--<h3>{{result.title}}</h3>-->\n      <!--<p>{{result.description}}</p>-->\n      <p><a href=\"{{result.videoUrl}}\"\n            class=\"btn btn-default\" role=\"button\">\n        Watch</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<h2>Basic Request</h2>\n<button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n<div *ngIf=\"loading\">loading...</div>\n<pre>{{data | json}}</pre>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"page-header\">\n    <h1>YouTube Search\n      <img\n        style=\"float: right;\"\n        *ngIf=\"loading\"\n        src=\"{{loadingGif}}\" />\n    </h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-group input-group-lg col-md-12\">\n      <app-search-box\n        (loading)=\"loading = $event\"\n        (results)=\"updateResults($event)\"\n      ></app-search-box>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <app-search-result\n      *ngFor=\"let result of results\"\n      [result]=\"result\">\n    </app-search-result>\n  </div>\n</div>\n"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loading.b0caf11935ee988a7ee4.gif";

/***/ })

},[1002]);
//# sourceMappingURL=main.bundle.js.map