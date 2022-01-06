export default function MasonryModule() {
    $('.grid-n').masonry({
        percentPosition: true,
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        stamp: '.stamp',

        horizontalOrder: true,
        // horizontalOrder: false,

        // gutter: 10,

        // isFitWidth: true
        // fitWidth: true,


        // resize: false,
    });
}