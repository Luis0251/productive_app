import createMiddleware from "next-intl/middleware";

export const middleware = createMiddleware({
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false,

});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
}