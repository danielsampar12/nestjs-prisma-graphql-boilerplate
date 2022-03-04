"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(4);
const path_1 = __importDefault(__webpack_require__(5));
const client_1 = __webpack_require__(6);
const type_graphql_1 = __webpack_require__(7);
const typegraphql_nestjs_1 = __webpack_require__(8);
const core_1 = __webpack_require__(9);
const common_1 = __webpack_require__(10);
const platform_express_1 = __webpack_require__(11);
const type_graphql_2 = __webpack_require__(12);
// custom resolver for custom business logic using Prisma Client
let CustomUserResolver = class CustomUserResolver {
    async bestUser({ prisma }) {
        return await prisma.user.findFirst({
            where: { email: "bob@prisma.io" },
        });
    }
    async favoritePost(user, { prisma }) {
        const [favoritePost] = await prisma.user
            .findUnique({ where: { id: user.id } })
            .posts({ take: 1 });
        return favoritePost;
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => type_graphql_2.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CustomUserResolver.prototype, "bestUser", null);
__decorate([
    (0, type_graphql_1.FieldResolver)((type) => type_graphql_2.Post, { nullable: true }),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof type_graphql_2.User !== "undefined" && type_graphql_2.User) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CustomUserResolver.prototype, "favoritePost", null);
CustomUserResolver = __decorate([
    (0, type_graphql_1.Resolver)((of) => type_graphql_2.User)
], CustomUserResolver);
async function main() {
    const prisma = new client_1.PrismaClient();
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                // use the TypeGraphQLModule to expose Prisma by GraphQL
                typegraphql_nestjs_1.TypeGraphQLModule.forRoot({
                    playground: true,
                    introspection: true,
                    path: "/",
                    emitSchemaFile: path_1.default.resolve(__dirname, "./generated-schema.graphql"),
                    validate: false,
                    context: () => ({ prisma }),
                }),
            ],
            providers: [
                // register all resolvers inside `providers` of the Nest module
                CustomUserResolver,
                type_graphql_2.UserRelationsResolver,
                type_graphql_2.UserCrudResolver,
                type_graphql_2.PostRelationsResolver,
                type_graphql_2.PostCrudResolver,
            ],
        })
    ], AppModule);
    const app = await core_1.NestFactory.create(AppModule, new platform_express_1.ExpressAdapter());
    await app.listen(4000);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    console.log(`GraphQL is listening on 4000! 🍻`);
}
main().catch(console.error);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dc577ea1a21f60cdfee")
/******/ })();
/******/ 
/******/ }
;