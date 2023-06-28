$(document).ready(() => {
  // Add courses to courses.html
  fetch('./courses.json')
    .then((response) => response.json())
    .then((data) => {
      for (let course of data) {
        let newCourse =
        '<article class="course-item"> \
          <div class="course-image"> \
            <img src="./images/' + course['image'] +'" alt="Course"> \
          </div> \
          <div class="course-info"> \
            <h4 class="course-title">' + course['name'] + '</h4> \
            <p class="course-text"> \
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident. \
              Excepturi blanditiis rerum distinctio ipsam nemo, accusamus maiores nobis cum \
              perspiciatis. Saepe voluptatum temporibus suscipit molestiae unde doloremque facilis? Quod. \
            </p> \
            <a href="courses.html" class="btn btn-success">Learn more</a> \
          </div> \
        </article>';
        $('.courses-container').append(newCourse);
      }
    });
})