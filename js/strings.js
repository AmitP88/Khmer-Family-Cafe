/*		Dish strings	*/
//var HTMLdishPic = '<img src=%data% class="dish-img img-responsive">';
var HTMLdishPic = '<img src=%data% class="dish-img">';
var HTMLdishName = '<h3>%data%</h3>';
var HTMLdishPrice = '<p class="text-right">%data%</p>';
var HTMLdishDescription = '<p>%data%</p>';

var HTMLfulldishPic = '<img src=%data% class="img-responsive">';


/*	Modal strings	*/

var ModalBody = '<div class="modal-body">' + HTMLfulldishPic + HTMLdishDescription + HTMLdishPrice + '</div>';

var ModalOrderButton = '<button type="button" class="btn btn-primary">Order</button>';
var ModalCloseButton = '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';

var ModalXButton = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
var ModalTitle = '<h4 class="modal-title" id="exampleModalLabel">%data%</h4>';
var ModalHeader = '<div class="modal-header">' + ModalXButton  + ModalTitle + '</div>';
var ModalFooter = '<div class="modal-footer">' + ModalCloseButton + /*ModalOrderButton +*/ '</div>';

var ModalContent = '<div class="modal-content">' + ModalHeader + ModalBody + ModalFooter + '</div>';

var ModalDialog = '<div class="modal-dialog">' + ModalContent + '</div>';


/*	Carousel strings	*/

var SpecialDescription = '<p class="col-xs-12 description-specials text-left">%data%</p>';