local Moonwave = require("@self/moonwave")
local Generator = require("@self/generator")
local Markdown = require("@self/markdown")
local Processor = require("@self/processor")

Generator.removeLegacyFiles()

local packageCommentJson = Moonwave.extractCommentsIntoJson()

packageCommentJson = Processor.processInheritedObjects(packageCommentJson)

for _, classDocumentation in packageCommentJson do
	local documentPath = Generator.writeClassName(classDocumentation.name)
	local documentContent = Markdown.generateMarkdownDocumentFor(classDocumentation)

	print(`Writing document '{classDocumentation.name}' to '{documentPath}', size: {string.len(documentContent)}`)

	Generator.writeClassContent(documentPath, documentContent)
end

return {}