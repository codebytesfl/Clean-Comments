const vscode = require('vscode');
const languageMap = require('./config/language_map')

// =====================================================================================================================
// Comment Block Settings (TO BE MOVED TO EXTENSION SETTINGS)
// =====================================================================================================================


// =====================================================================================================================
// GENERATE COMMENT LINE
// =====================================================================================================================
const generateCommentLine = () => {

    const configuredView = vscode.workspace.getConfiguration().ccomment

    const commentFillerSymbol = configuredView.fillerSymbol
    const midSymbol = configuredView.innerSymbol
    const commentWidth = configuredView.commentWidth
    const condensed = configuredView.commentPadding

    // Grab current editor
    const activeEditor = vscode.window.activeTextEditor
    const languageId = activeEditor.document.languageId
    const languageSettings = languageMap.GetLanguageInfo(languageId)

    // Only run if there is an editor and valid language ID
    if (activeEditor && activeEditor.document.languageId) {
        // Settings
        const commentSymbol = languageSettings.comment_start
        const endingCommentSymbol = languageSettings.comment_end

        // Calculate Line to insert Comment Block
        const cursorLine = activeEditor.selection.active.line
        const document = activeEditor.document
        const startInsertLine = document.lineAt(cursorLine)
        const commentText = startInsertLine.text.trim()

        // Setup Comment Block Spacing, Here we also take into account
        // How many tabs / spaces
        const indentSize = startInsertLine.firstNonWhitespaceCharacterIndex;
        const indent = " ".repeat(indentSize)
        const commentPadding = condensed ? ' ' : ''
        const commentContent = commentText.length > 0 ? commentText : ''
        const commentFiller = commentFillerSymbol.repeat(commentWidth - indent.length - (commentPadding.length * commentText.length > 0 ? 2 : 1) - endingCommentSymbol.length - commentSymbol.length - commentText.length)

        // Setup Edit
        const edit = new vscode.WorkspaceEdit();
        const block = `${indent}${commentSymbol}${commentPadding}${commentContent.length > 0 ? commentContent + commentPadding : ''}${commentFiller}${endingCommentSymbol}`
        edit.replace(document.uri, startInsertLine.range, block)

        // Apply Edit then move mouse to app if there was no commented text
        return vscode.workspace.applyEdit(edit)
    }
}


// =====================================================================================================================
// GENERATE COMMENT BLOCK
// =====================================================================================================================
const generateCommentBlock = () => {

    const configuredView = vscode.workspace.getConfiguration().ccomment

    const commentFillerSymbol = configuredView.fillerSymbol
    const midSymbol = configuredView.innerSymbol
    const commentWidth = configuredView.commentWidth
    const condensed = configuredView.commentPadding

    console.log(commentFillerSymbol)


    // Grab current editor
    const activeEditor = vscode.window.activeTextEditor
    const languageId = activeEditor.document.languageId
    const languageSettings = languageMap.GetLanguageInfo(languageId)

    // Only run if there is an editor and file open
    if (activeEditor && activeEditor.document.languageId) {

        // Settings
        const commentSymbol = languageSettings.comment_start
        const endingCommentSymbol = languageSettings.comment_end

        // Calculate Line to insert Comment Block
        const cursorLine = activeEditor.selection.active.line
        const document = activeEditor.document
        const startInsertLine = document.lineAt(cursorLine)
        const commentText = startInsertLine.text.trim()


        // Setup Comment Block Spacing, Here we also take into account
        // How many tabs / spaces
        const indentSize = startInsertLine.firstNonWhitespaceCharacterIndex;
        const indent = " ".repeat(indentSize)
        const commentFiller = commentFillerSymbol.repeat(commentWidth - commentSymbol.length - condensed - indentSize)
        const commentPadding = condensed ? ' ' : ''
        const commentMidSymbol = endingCommentSymbol ? midSymbol : commentSymbol
        const commentContent = commentText.length > 0 ? commentText : ''

        // Setup Edit
        const edit = new vscode.WorkspaceEdit();
        const commentBorders = `${indent}${commentSymbol}${commentPadding}${commentFiller}`
        const commentBorderEnd = `${indent}${commentFiller}${commentPadding}${endingCommentSymbol}`
        const commentInner = `${indent}${commentMidSymbol} ${commentContent}`

        // Construct and Make Edit
        const block = `${commentBorders}\n${commentInner}\n${endingCommentSymbol ? commentBorderEnd : commentBorders}`
        edit.replace(document.uri, startInsertLine.range, block)


        // Apply Edit then move mouse to app if there was no commented text
        vscode.workspace.applyEdit(edit).then(async edited => {
            if (edited && commentText.length == 0) {
                // Create Position and Selection
                const position = { x: commentMidSymbol.length + 1 + indentSize, y: cursorLine + 1 }
                await moveCursor(activeEditor, position)
            }
        })
    }

}


// =====================================================================================================================
// MOVE CURSOR TO COMMENT BLOCK TO ENTER COMMENT
// =====================================================================================================================
const moveCursor = (activeEditor, position) => {
    const pos = new vscode.Position(position.y, position.x)
    const selection = new vscode.Selection(pos, pos)
    return activeEditor.selection = selection
}


module.exports = {
    generateCommentLine,
    generateCommentBlock,
    moveCursor
}
