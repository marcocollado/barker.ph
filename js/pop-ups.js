//jQuery Pop Ups by Adrian "yEnS" Mato Gondelle from http://www.yensdesign.com
var popupAboutStatus=0;
function loadPopupAbout(){
    if(popupAboutStatus==0){
        $("#popupAbout").fadeIn("slow");
        popupAboutStatus=1}}
    function disablePopupAbout(){
        if(popupAboutStatus==1){
            $("#popupAbout").fadeOut("slow");popupAboutStatus=0}}
        function centerPopupAbout(){
        var b=document.documentElement.clientWidth;
        var d=document.documentElement.clientHeight;
        var a=$("#popupAbout").height();
        var c=$("#popupAbout").width();
        $("#popupAbout").css({position:"absolute",top:d/2-a/2,left:b/2-c/2})}
        $(document).ready(function(){
            $("#popupAbout").fadeOut();popupAboutStatus=0;$("#about").click(function(){
            $("#popupAbout").css({visibility:"visible"});
            disablePopupProjects();
            disablePopupContact();
            disablePopupHelp()centerPopupAbout();loadPopupAbout()});
        $("#popupAboutClose").click(function(){disablePopupAbout()})});$(function(){$("#popupAbout").jScrollPane();$(".popupAbout").jScrollPane({showArrows:true,horizontalGutter:10})});
        
        var popupProjectsStatus=0;
        function loadPopupProjects(){
            if(popupProjectsStatus==0){
            $("#popupProjects").fadeIn("slow");popupProjectsStatus=1}}
            function disablePopupProjects(){
                if(popupProjectsStatus==1){$("#popupProjects").fadeOut("slow");
                popupProjectsStatus=0}}
            function centerPopupProjects(){
                var b=document.documentElement.clientWidth;
                var d=document.documentElement.clientHeight;
                var c=$("#popupProjects").height();
                var a=$("#popupProjects").width();
                $("#popupProjects").css({
                    position:"absolute",top:d/2-c/2,left:b/2-a/2})}
                $(document).ready(function(){
                $("#popupProjects").fadeOut();
                popupProjectsStatus=0;
                $("#projects").click(function(){
                $("#popupProjects").css({visibility:"visible"});
                disablePopupAbout();
                disablePopupContact();
                disablePopupHelp();
                centerPopupProjects();
                loadPopupProjects()});
                $("#popupProjectsClose").click(function(){disablePopupProjects()})});
                $(function(){$("#popupProjects").jScrollPane();
                $(".popupProjects").jScrollPane({
                    showArrows:true,horizontalGutter:10})});
                var popupContactStatus=0;
                function loadPopupContact(){
                    if(popupContactStatus==0){
                        $("#popupContact").fadeIn("slow");popupContactStatus=1}}
                function disablePopupContact(){
                    if(popupContactStatus==1){$("#popupContact").fadeOut("slow");popupContactStatus=0}}
                    function centerPopupContact(){
                        var a=document.documentElement.clientWidth;
                var d=document.documentElement.clientHeight;
                var c=$("#popupContact").height();
                var b=$("#popupContact").width();
                $("#popupContact").css({position:"absolute",top:d/2-c/2,left:a/2-b/2})}
                $(document).ready(function(){
                    $("#popupContact").fadeOut();popupContactStatus=0;
                    $("#contact").click(function(){$("#popupContact").css({visibility:"visible"});
                    disablePopupAbout();
                    disablePopupProjects();
                    centerPopupContact();
                    loadPopupContact()});
                    $("#popupContactClose").click(function(){disablePopupContact()})});
                    $(function(){$("#popupContact").jScrollPane();
                    $(".popupContact").jScrollPane({showArrows:true,horizontalGutter:10})});

                    var popupHelpStatus=0;
                function loadPopupHelp(){
                    if(popupHelpStatus==0){
                        $("#popupHelp").fadeIn("slow");popupHelpStatus=1}}
                function disablePopupContact(){
                    if(popupHelpStatus==1){$("#popupHelp").fadeOut("slow");popupHelpStatus=0}}
                    function centerPopupHelp(){
                        var a=document.documentElement.clientWidth;
                var d=document.documentElement.clientHeight;
                var c=$("#popupHelp").height();
                var b=$("#popupHelp").width();
                $("#popupHelp").css({position:"absolute",top:d/2-c/2,left:a/2-b/2})}
                $(document).ready(function(){
                    $("#popupHelp").fadeOut();popupHelpStatus=0;
                    $("#help").click(function(){$("#popupHelp").css({visibility:"visible"});
                    disablePopupAbout();
                    disablePopupProjects();
                    disablePopupContact();
                    centerPopupHelp();
                    loadPopupHelp()});
                    $("#popupHelpClose").click(function(){disablePopupHelp()})});
                    $(function(){$("#popupHelp").jScrollPane();
                    $(".popupHelp").jScrollPane({showArrows:true,horizontalGutter:10})});