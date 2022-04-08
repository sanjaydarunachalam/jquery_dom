
let currentId =0;
let movieList = [];

$(function(){
    //collects info from submit to object, increments movieID, 
    //and clears all input entry fields 
    $("#movie-form").on("submit", function (e) {
        e.preventDefault();
        let title= $("#movie-title").val();
        let rating= $("#movie-rating").val();

        let movieData= {title, rating, currentId};
        const HTMLMovieData = createMovieDataHTML(movieData);

        currentId++
        movieList.push(movieData);

        $("#movie-table-body").append(HTMLMovieData);
        $("#movie-form").trigger("reset");
    });

    //remove Movie from table event handler when X is clicked
    $("tbody").on("click", ".btn-delete", function(e){

    //finds Index of movie to be removed    
    let removeIndex = movieList.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"))
    
    //splices array, and uses removeIndex to find correct index
    //removes movie from table 
    movieList.splice(removeIndex, 1)
    $(e.target).closest("tr").remove();
    });

});

//Used to create an HTML row in the table body, containing movie title and rating
//uses data gathered from submit and passed through the "data" object 
function createMovieDataHTML(data) {
    return `
    <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
            <button class="btn-delete" id=${data.currentId}>X</button>
        </td>
    <tr>
    `;
};




