<p align="center">
  <img alt="Comment Divider" src="logo.png" width="15%"  />
</p>

<h1 align="center">
  Clean Comments
</h1>

## Features

Writing code is like writing a book. You want to write code with the idea that others will read your code. Use this extension to help visualize and logically break up your code. Make it easier for you or future developers to read and understand your code. 

This extension supports most languages in vscode, meaning it will use `#` for python and `//` for javascript for example. 


<img alt="Comment Divider" src="header.gif"   />
<br></br>

> Tip: Set keyboard shortcuts to quickly make comments instead of using commands!



## Extension Settings

You are able to configure the comment blocks to however you'd like. You can change the comment filler character, the width, and more. 

#### Terminology:
- fillerSymbol: used to describe the character that repeats across the comment block. Default is `=`
- innerSymbol: used to describe the character in the middle of a comment block before the comment text.
- commendPadding: used to describe if there should be a space between the comment text and the comment symbol.




#### Commands:

**Set the commment filler symbol**
```json
  "ccomment.fillerSymbol": "=",
```

**Set the commment padding symbol (true means there will be a space)**
```json
  "ccomment.commentPadding": true,
```

**Set the commment width**
```json
  "ccomment.commentWidth": 80,
```

**Set the commment inner symbol**
```json
  "ccomment.innerSymbol": "|",
```

## Supported Languages:

---

## Known Issues

*Open a new issue on this github repository if a bug is found!*

**Major Issues:**
- None reported

## Release Notes

See changelog.md

## License

See LICENSE


