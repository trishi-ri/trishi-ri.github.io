webpackJsonp([1,4],{

/***/ 297:
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

/***/ 298:
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
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
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

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(448);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/main.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_article_article_model__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_articles_list_articles_list_model__ = __webpack_require__(298);
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
            template: __webpack_require__(610),
            styles: [__webpack_require__(606)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_article_article_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_articles_list_articles_list_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_create_article_form_create_article_component__ = __webpack_require__(451);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_articles_list_articles_list_component__["a" /* ArticlesListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form_create_article_form_create_article_component__["a" /* FormCreateArticleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_model__ = __webpack_require__(297);
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
            template: __webpack_require__(611),
            styles: [__webpack_require__(607)],
            host: { 'class': 'list-group-item' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/article.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_list_model__ = __webpack_require__(298);
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
            template: __webpack_require__(612),
            styles: [__webpack_require__(608)],
            host: { 'class': 'block-of-information' }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesListComponent);
    return ArticlesListComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Projects/GitHub/mytodolist/src/articles-list.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(272);
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
            template: __webpack_require__(613),
            styles: [__webpack_require__(609)],
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

/***/ 452:
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

/***/ 606:
/***/ (function(module, exports) {

module.exports = ".block-of-information {\r\n  display: block;\r\n  position: relative;\r\n  margin: 5px;\r\n  border: solid 1px black;\r\n}\r\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = ".additional-group {\r\n  display: none;\r\n}\r\n\r\n.additional-group.displayed {\r\n  display: block;\r\n}\r\n\r\n.list-group-item-heading {\r\n  padding: 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n#buttonDelete {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n  margin: 10px 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.list-group-item.selected {\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n\r\n.list-group-item:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.list-group {\r\n  background-color: gray;\r\n  padding: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.divider {\r\n  position: absolute;\r\n  width: 5px;\r\n  height: 100%;\r\n  top: 0;\r\n  border-left: 2px solid #e5e5e5;\r\n  margin-left: 25px;\r\n}\r\n"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "/*Only display content to screen readers*/\r\n/*See: http://a11yproject.com/posts/how-to-hide-content*/\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n\r\n.inputField {\r\n  margin: 5px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\nform {\r\n  margin: 5px;\r\n}\r\n\r\n.list-group.validator-messages {\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4 col-md-2 sidebar\">\r\n    <form-create-article\r\n      (onArticleValid)=\"addArticle($event)\">\r\n    </form-create-article>\r\n  </div>\r\n  <div class=\"col-sm-4 col-md-5 main\">\r\n    <app-articles-list\r\n      [articles]=\"articles\"\r\n      (onArticleSelected)=\"articleWasSelected($event)\">\r\n    </app-articles-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<span class=\"label label-default\">\r\n  #{{article.id}}\r\n</span>\r\n<span class=\"badge\">\r\n  {{article.votes}}\r\n</span>\r\n<span class=\"list-group-item-heading\">\r\n  {{article.title}}\r\n</span>\r\n<span>({{article.domain()}})</span>\r\n<div [class.displayed]=\"selected\" class=\"additional-group\">\r\n  <p>\r\n    <a class=\"list-group-item-text\" href=\"{{article.link}}\">\r\n      {{article.link}}\r\n    </a>\r\n  </p>\r\n\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteUp($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span>\r\n      Up\r\n    </button>\r\n    <button type=\"button\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"voteDown($event)\">\r\n      <span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span>\r\n      Down\r\n    </button>\r\n  </div>\r\n  <button type=\"button\"\r\n          class=\"btn btn-default\"\r\n          id=\"buttonDelete\"\r\n          (click)=\"deleteArticle($event)\">\r\n    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n    Delete\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"divider\"></div>\r\n  <app-article\r\n    *ngFor=\"let NextArticle of articles.sortedArticles()\"\r\n    [article]=\"NextArticle\"\r\n    (click)=\"clicked(NextArticle)\"\r\n    (onDelete)=\"deleteArticle($event)\"\r\n    [class.selected]=\"isSelected(NextArticle)\"\r\n    [selected]=\"isSelected(NextArticle)\">\r\n  </app-article>\r\n</div>\r\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\"\r\n      (ngSubmit)=\"onSubmit(myForm.value)\">\r\n\r\n  <h3 class=\"ui header\">new article</h3>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputTitle\" class=\"sr-only\">Title</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputTitle\"\r\n           placeholder=\"Title\"\r\n           required\r\n           [formControl]=\"myForm.get('title')\"\r\n           [(ngModel)]=\"title\"\r\n           name=\"title\">\r\n    <div *ngIf=\"myForm.get('title').hasError('required') && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Title is required\r\n    </div>\r\n    <div *ngIf=\"myForm.get('title').valid && myForm.get('title').dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Title is ok\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"inputField\">\r\n    <label for=\"inputLink\" class=\"sr-only\">Link</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"inputLink\"\r\n           placeholder=\"Link\"\r\n           required\r\n           [formControl]=\"myForm.controls['link']\"\r\n           name=\"link\">\r\n    <div *ngIf=\"link.hasError('required') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link is required\r\n    </div>\r\n    <div *ngIf=\"link.hasError('invalidLink') && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n      Link must begin with 'http'\r\n    </div>\r\n    <div *ngIf=\"link.valid && link.dirty\">\r\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n      Link is ok\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\"\r\n          id=\"submitButton\"\r\n          class=\"btn btn-default btn-block\">\r\n    Submit\r\n  </button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[627]);
//# sourceMappingURL=main.bundle.map