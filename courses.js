$(document).ready(function() {
    $("#maths-header").click(function() {
        $("#maths-series").slideToggle(250);
    });
    $("#breadboard-header").click(function() {
        $("#breadboard-series").slideToggle(250);
    });
    $("#maths-link").click(function() {
        $("#maths-series").show();
        window.location.href = "#maths-header";
    });
    $("#breadboard-link").click(function() {
        $("#breadboard-series").show();
        window.location.href = "#breadboard-header";
    });
    $.getJSON("courses.json", function(result) {
        $.each(result, function(i,item) {
            //want to insert something like:
            // <div id="maths-link">
            //     Maths<br/>
            //     <div class="series-progress">progress: 0/2</div>
            // </div>
            // <br/>

            id1=item.link;
            $("#series-list").append("<div id='" + id1 + "'></div>");
            $("#"+id1).append(item.title + " <br/>");
            progress_string = "progress: " + item.progress + "/" + item.count;
            $("#"+id1).append('<div class="series-progress">' + progress_string + '</div>');
            $("#"+id1).append(" <br/>");

        });
    });
});