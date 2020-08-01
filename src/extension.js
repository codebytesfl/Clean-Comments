const CommentGenerator = require('./blocks.js')
const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */


const activate = (context) => {
	console.log('"ccomment" is now active!');

	// Register main comment line
	context.subscriptions.push(vscode.commands.registerCommand('ccomment.mainCommentLine', async () => {
		await CommentGenerator.generateCommentLine()
	}));


	context.subscriptions.push(vscode.commands.registerCommand('ccomment.mainCommentBlock', async () => {
		await CommentGenerator.generateCommentBlock()
	}));

}

// this method is called when your extension is deactivated
const deactivate = () => { }

exports.activate = activate;
module.exports = {
	activate,
	deactivate
}

