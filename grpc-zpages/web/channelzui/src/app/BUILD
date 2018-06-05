licenses(["notice"])  # Apache 2.0

package(default_visibility = ["//visibility:public"])

load("//javascript/angular2:build_defs.bzl", "ng_module")

ng_module(
    name = "app",
    srcs = glob(["**/*.ts"]),
    assets = glob(["**/*.css"]) + glob(["**/*.html"]),
    deps = [
        "//third_party/javascript/angular2:common",
        "//third_party/javascript/angular2:common_http",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:forms",
        "//third_party/javascript/angular2:platform_browser",
        "//third_party/javascript/angular2:router",
        "//third_party/javascript/rxjs",
    ],
)

load("//javascript/typescript:build_defs.bzl", "ts_config")

ts_config(
    name = "tsconfig",
    deps = [
        ":app",
        "//third_party/javascript/angular2:common",
        "//third_party/javascript/angular2:common_http",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:forms",
        "//third_party/javascript/angular2:platform_browser",
        "//third_party/javascript/angular2:router",
        "//third_party/javascript/rxjs",
    ],
)
