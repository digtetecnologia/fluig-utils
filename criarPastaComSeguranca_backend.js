var FOLDER_NAME = "" // Inserir aqui o nome da pasta dinamicamente
var REQUEST_NUMBER = getValue("WKNumProces");
var ADDITIONAL_COMMENTS = "This folder was created automatically from fluig BPM - request ";
var DOCUMENT_TYPE_FOLDER = "1";
var PARENT_FOLDER_CODE = "" // Inerir aqui o id da pasta pai desta pasta dinamicamente
var INHERIT_SECURITY = "true";

var dto = docAPI.newDocumentDto();
dto.setDocumentDescription(FOLDER_NAME);
dto.setAdditionalComments(ADDITIONAL_COMMENTS + REQUEST_NUMBER);
dto.setDocumentType(DOCUMENT_TYPE_FOLDER);
dto.setParentDocumentId(parseInt(PARENT_FOLDER_CODE));
dto.setInheritSecurity(INHERIT_SECURITY);

var dtosSecurity = new Array();

var dtoSecurity1 = docAPI.newDocumentSecurityConfigDto(); // USER_ATTRIBUTION_TYPE, GROUP_ATTRIBUTION_TYPE, ALL_USER_ATTRIBUTION_TYPE
dtoSecurity1.setAttributionType();
dtoSecurity1.setAttributionValue();
dtoSecurity1.setPermission(true);
dtoSecurity1.setShowContent(true);
dtoSecurity1.setSecurityLevel(ALL); // ALL, MODIFICATION, RECORDING

dtosSecurity.push(dtoSecurity1);

var FOLDER = docAPI.createFolder(dto, dtosSecurity, null);
log.info("Folder successfully createad: ID :" + FOLDER.getDocumentId());