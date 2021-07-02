/**
 * Creates a map between a document's _id and the document record
 * @param documents 
 * @returns a map between a document's _id and the document record
 */
export const createDocumentMap = (documents: Array<any>) => {
    let documentMap: any = {};
    documents.forEach(function(document) {
        documentMap[document._id] = document; 
    })
    return documentMap;
}