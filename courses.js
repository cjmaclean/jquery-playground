$(document).ready(function() {
    $.getJSON("courses.json", function(result) {
        $.each(result, function(i,item) {
            //want to insert something like:
            // <div id="maths-link">
            //     Maths<br/>
            //     <div class="series-progress">progress: 0/2</div>
            // </div>
            // <br/>

            id=item.link;
            hash_id="#"+id;
            $("#series-list").append("<div id='" + id + "'></div>");
            $(hash_id).append(item.title + " <br/>");
            progress_string = "progress: " + item.progress + "/" + item.count;
            $(hash_id).append('<div class="series-progress">' + progress_string + '</div>');
            $(hash_id).append(" <br/>");


            // Then want to set clicking the series title in the list of series to display that series
            $(hash_id).click(function() {
                $(".series-contents").hide(); // hide other series.
                $("#"+ item.code+"-series").show();
                window.location.href = "#"+item.code+"-header";
            });

            // And clicking the header above the series contents should toggle showing the contents
            $("#"+ item.code+"-header").click(function() {
                $("#"+ item.code+"-series").slideToggle(250);
            });
        });
    });
});