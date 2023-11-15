const dummy = (blogs) => {
    return 1;
  }

const  totalLikes = (blogs) => {
  if(blogs.length <= 0){ return "zero"}
  else if(blogs.length == 1){ return Number(blogs.map( blog => blog.likes ))}
  else return blogs.reduce((sum, blog)=>{ return sum + blog.likes}, 0);
}

const favoriteBlog = (blogs) => {
  const maxLikes = (obj) => {
    return obj.likes === Math.max(...blogs.map(blog => blog.likes))
  };
  const maxBlog = blogs.find(maxLikes);
  return {title: maxBlog.title,
          author: maxBlog.author,
          likes: maxBlog.likes
          }
}

  export default { dummy, 
                   totalLikes,
                   favoriteBlog };