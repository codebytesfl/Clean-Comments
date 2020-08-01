const GetLanguageInfo = (languageId) => {
    const languageMap = {
        "abap": { comment_start: "*", comment_end: "" },
        "bat": { comment_start: "::", comment_end: "" },
        "clojure": { comment_start: ";;", comment_end: "" },
        "coffeescript": { comment_start: "#", comment_end: "" },
        "c": { comment_start: "//", comment_end: "" },
        "cpp": { comment_start: "//", comment_end: "" },
        "css": { comment_start: "/*", comment_end: "*/" },
        "diff": { comment_start: "#", comment_end: "" },
        "dockerfile": { comment_start: "#", comment_end: "" },
        "fsharp": { comment_start: "//", comment_end: "" },
        "go": { comment_start: "//", comment_end: "" },
        "groovy": { comment_start: "//", comment_end: "" },
        "html": { comment_start: "<!--", comment_end: "-->" },
        "ini": { comment_start: ";", comment_end: "" },
        "java": { comment_start: "//", comment_end: "" },
        "javascript": { comment_start: "//", comment_end: "" },
        "javascriptreact": { comment_start: "//", comment_end: "" },
        "latex": { comment_start: "%", comment_end: "" },
        "less": { comment_start: "//", comment_end: "" },
        "lua": { comment_start: "--", comment_end: "" },
        "makefile": { comment_start: "#", comment_end: "" },
        "objective-c": { comment_start: "//", comment_end: "" },
        "objective-cpp": { comment_start: "//", comment_end: "" },
        "perl": { comment_start: "#", comment_end: "" },
        "perl6": { comment_start: "//", comment_end: "" },
        "php": { comment_start: "//", comment_end: "" },
        "powershell": { comment_start: "#", comment_end: "" },
        "jade": { comment_start: "//-", comment_end: "" },
        "python": { comment_start: "#", comment_end: "" },
        "r": { comment_start: "<!--", comment_end: "-->" },
        "ruby": { comment_start: "#", comment_end: "" },
        "rust": { comment_start: "//", comment_end: "" },
        "scss": { comment_start: "//", comment_end: "" },
        "shellscript": { comment_start: "#", comment_end: "" },
        "sql": { comment_start: "--", comment_end: "" },
        "swift": { comment_start: "//", comment_end: "" },
        "typescript": { comment_start: "//", comment_end: "" },
        "typescriptreact": { comment_start: "//", comment_end: "" },
        "tex": { comment_start: "%", comment_end: "" },
        "vb": { comment_start: "'", comment_end: "" },
        "xml": { comment_start: "<!--", comment_end: "-->" },
        "yaml": { comment_start: "#", comment_end: "" },
    }

    return languageMap[languageId] ? languageMap[languageId] : { "message": "not fond" }
}

module.exports = {
    GetLanguageInfo
}
