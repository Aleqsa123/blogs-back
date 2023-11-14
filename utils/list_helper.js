const dummy = (blogs) => {
    return 1;
  }

const  totalLikes  = (blogs) => {
  if(blogs.length <= 0){ return "zero"}
  else if(blogs.length == 1){ return Number(blogs.map( blog => blog.likes ))}
  else return blogs.reduce((sum, blog)=>{ return sum + blog.likes}, 0);
}

  export default { dummy, totalLikes };