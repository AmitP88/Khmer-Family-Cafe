/*		Dish strings	*/
var HTMLdishPic = '<img src=%data% class="dish-img img-responsive">';
var HTMLdishName = '<h4>%data%</h4>';
var HTMLdishPrice = '<h5>%data%</h5>';
var HTMLdishDescription = '<p>%data%</p>';


/*		Modal strings	*/

var ModalBody = '<div class="modal-body">' + HTMLdishPic + HTMLdishDescription + HTMLdishPrice + '</div>';

var ModalOrderButton = '<button type="button" class="btn btn-primary">Order</button>';
var ModalCloseButton = '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
var ModalFooter = '<div class="modal-footer">' + ModalCloseButton + ModalOrderButton + '</div>';

var ModalXButton = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
var ModalTitle = '<h5 class="modal-title" id="exampleModalLabel">%data%</h5>';


var ModalHeader = '<div class="modal-header">' + ModalXButton  + ModalTitle + '</div>';

var ModalContent = '<div class="modal-content">' + ModalHeader + ModalBody + ModalFooter + '</div>';

var ModalDialog = '<div class="modal-dialog">' + ModalContent + '</div>';