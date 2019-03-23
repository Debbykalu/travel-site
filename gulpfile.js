var gulp =require('gulp');
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray - you just created a gulp task");
});

gulp.task('html', function(){
    console.log("Imagine doing somethings different with html");
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});