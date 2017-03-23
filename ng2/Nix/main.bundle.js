webpackJsonp([1,4],{

/***/ 331:
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

/***/ 332:
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_result_search_result_model__ = __webpack_require__(514);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(YOUTUBE_API_KEY)),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(YOUTUBE_API_URL)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, String, String])
    ], YouTubeService);
    return YouTubeService;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/you-tube.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 401;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_articles_list_articles_list_model__ = __webpack_require__(332);
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
            template: __webpack_require__(680),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_article_article_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_articles_list_articles_list_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_create_article_form_create_article_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_simple_http_simple_http_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_box_search_box_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_result_search_result_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_youtube_search_youtube_search_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_http_requests_http_requests_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__ = __webpack_require__(333);
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
                __WEBPACK_IMPORTED_MODULE_13__components_http_requests_http_requests_component__["a" /* HttpRequestsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__["a" /* YouTubeService */], __WEBPACK_IMPORTED_MODULE_14__services_youtube_you_tube_service__["b" /* youTubeServiceInjectable */]],
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_model__ = __webpack_require__(331);
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
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ArticleComponent.prototype, "onDelete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */]) === 'function' && _b) || Object)
    ], ArticleComponent.prototype, "article", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ArticleComponent.prototype, "selected", void 0);
    ArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__(681),
            styles: [__webpack_require__(672)],
            host: { 'class': 'list-group-item' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/article.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_list_model__ = __webpack_require__(332);
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
        this.onArticleSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__articles_list_model__["a" /* ArticlesList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__articles_list_model__["a" /* ArticlesList */]) === 'function' && _a) || Object)
    ], ArticlesListComponent.prototype, "articles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ArticlesListComponent.prototype, "onArticleSelected", void 0);
    ArticlesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-articles-list',
            template: __webpack_require__(682),
            styles: [__webpack_require__(673)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesListComponent);
    return ArticlesListComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/articles-list.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(305);
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
        this.onArticleValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === 'function' && _a) || Object)
    ], FormCreateArticleComponent.prototype, "onArticleValid", void 0);
    FormCreateArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'form-create-article',
            template: __webpack_require__(683),
            styles: [__webpack_require__(674)],
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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
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
            template: __webpack_require__(684),
            styles: [__webpack_require__(675)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpRequestsComponent);
    return HttpRequestsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/http-requests.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__ = __webpack_require__(333);
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
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
            template: __webpack_require__(685),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__["a" /* YouTubeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_youtube_you_tube_service__["a" /* YouTubeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object])
    ], SearchBoxComponent);
    return SearchBoxComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/search-box.component.js.map

/***/ }),

/***/ 513:
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
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/search-result.component.js.map

/***/ }),

/***/ 514:
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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
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
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SimpleHttpComponent);
    return SimpleHttpComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/simple-http.component.js.map

/***/ }),

/***/ 516:
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
        this.loadingGif = (window.__karma__) ? '' : __webpack_require__(963);
    }
    YoutubeSearchComponent.prototype.updateResults = function (results) {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    };
    YoutubeSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-youtube-search',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [])
    ], YoutubeSearchComponent);
    return YoutubeSearchComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/youtube-search.component.js.map

/***/ }),

/***/ 517:
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

/***/ 671:
/***/ (function(module, exports) {

module.exports = ".block-of-information {\r\n  display: block;\r\n  position: relative;\r\n  margin: 5px;\r\n  border: solid 1px black;\r\n}\r\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ".additional-group {\r\n  display: none;\r\n}\r\n\r\n.additional-group.displayed {\r\n  display: block;\r\n}\r\n\r\n.list-group-item-heading {\r\n  padding: 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n#buttonDelete {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n  margin: 10px 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.list-group-item.selected {\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n\r\n.list-group-item:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.list-group {\r\n  background-color: gray;\r\n  padding: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.divider {\r\n  position: absolute;\r\n  width: 5px;\r\n  height: 100%;\r\n  top: 0;\r\n  border-left: 2px solid #e5e5e5;\r\n  margin-left: 25px;\r\n}\r\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "/*Only display content to screen readers*/\r\n/*See: http://a11yproject.com/posts/how-to-hide-content*/\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n\r\n.inputField {\r\n  margin: 5px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\nform {\r\n  margin: 5px;\r\n}\r\n\r\n.list-group.validator-messages {\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4 col-md-2 sidebar\">\r\n    <form-create-article\r\n      (onArticleValid)=\"addArticle($event)\">\r\n    </form-create-article>\r\n  </div>\r\n  <div class=\"col-sm-4 col-md-5 main\">\r\n    <app-articles-list\r\n      [articles]=\"articles\"\r\n      (onArticleSelected)=\"articleWasSelected($event)\">\r\n    </app-articles-list>\r\n  </div>\r\n  <div class=\"col-sm-4 col-md-5\">\r\n    <app-simple-http></app-simple-http>\r\n    <app-http-requests></app-http-requests>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div>\r\n    <app-youtube-search></app-youtube-search>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<span class=\"label label-default\">\r\n  #{{article.id}}\r\n</span>\r\n<span class=\"badge\">\r\n  {{article.votes}}\r\n</span>\r\n<span class=\"list-group-item-heading\">\r\n  {{article.title}}\r\n</span>\r\n<span>({{article.domain()}})</span>\r\n<div [class.displayed]=\"selected\" class=\"additional-group\">\r\n  <p>\r\n    <a class=\"list-group-item-text\" href=\"{{article.link}}\">\r\n      {{article.link}}\r\n    </a>\r\n  </p>\r\n\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteUp($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span>\r\n      Up\r\n    </button>\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteDown($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span>\r\n      Down\r\n    </button>\r\n  </div>\r\n  <button type=\"button\"\r\n          class=\"btn btn-default\"\r\n          id=\"buttonDelete\"\r\n          (click)=\"deleteArticle($event)\">\r\n    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n    Delete\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"divider\"></div>\r\n  <app-article\r\n    *ngFor=\"let NextArticle of articles.sortedArticles()\"\r\n    [article]=\"NextArticle\"\r\n    (click)=\"clicked(NextArticle)\"\r\n    (onDelete)=\"deleteArticle($event)\"\r\n    [class.selected]=\"isSelected(NextArticle)\"\r\n    [selected]=\"isSelected(NextArticle)\">\r\n  </app-article>\r\n</div>\r\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\"\r\n      (ngSubmit)=\"onSubmit(myForm.value)\">\r\n\r\n  <h3 class=\"ui header\">new article</h3>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputTitle\" class=\"sr-only\">Title</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputTitle\"\r\n           placeholder=\"Title\"\r\n           required\r\n           [formControl]=\"myForm.get('title')\"\r\n           [(ngModel)]=\"title\"\r\n           name=\"title\">\r\n    <div *ngIf=\"myForm.get('title').hasError('required') && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Title is required\r\n    </div>\r\n    <div *ngIf=\"myForm.get('title').valid && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Title is ok\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputLink\" class=\"sr-only\">Link</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputLink\"\r\n           placeholder=\"Link\"\r\n           required\r\n           [formControl]=\"myForm.controls['link']\"\r\n           name=\"link\">\r\n    <div *ngIf=\"link.hasError('required') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link is required\r\n    </div>\r\n    <div *ngIf=\"link.hasError('invalidLink') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link must begin with 'http'\r\n    </div>\r\n    <div *ngIf=\"link.valid && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Link is ok\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\"\r\n          id=\"submitButton\"\r\n          class=\"btn btn-default btn-block\">\r\n    Submit\r\n  </button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<h2>More Requests</h2>\n<button type=\"button\" (click)=\"makePost()\">Make Post</button>\n<button type=\"button\" (click)=\"makeDelete()\">Make Delete</button>\n<button type=\"button\" (click)=\"makeHeaders()\">Make Headers</button>\n<div *ngIf=\"loading\">loading...</div>\n<pre>{{data | json}}</pre>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-2\">\n  <div class=\"thumbnail\">\n    <img src=\"{{result.thumbnailUrl}}\" title=\"{{result.title}}\">\n    <div class=\"caption\">\n      <!--<h3>{{result.title}}</h3>-->\n      <!--<p>{{result.description}}</p>-->\n      <p><a href=\"{{result.videoUrl}}\"\n            class=\"btn btn-default\" role=\"button\">\n        Watch</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<h2>Basic Request</h2>\n<button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n<div *ngIf=\"loading\">loading...</div>\n<pre>{{data | json}}</pre>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"page-header\">\n    <h1>YouTube Search\n      <img\n        style=\"float: right;\"\n        *ngIf=\"loading\"\n        src=\"{{loadingGif}}\" />\n    </h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-group input-group-lg col-md-12\">\n      <app-search-box\n        (loading)=\"loading = $event\"\n        (results)=\"updateResults($event)\"\n      ></app-search-box>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <app-search-result\n      *ngFor=\"let result of results\"\n      [result]=\"result\">\n    </app-search-result>\n  </div>\n</div>\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loading.gif";

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(402);


/***/ })

},[965]);
//# sourceMappingURL=main.bundle.map