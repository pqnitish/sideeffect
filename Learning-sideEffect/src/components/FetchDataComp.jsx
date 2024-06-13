import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import PostCard from "./PostCard";
export default function FetchDataComp() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 
  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      });
      // console.log(res.data);
      let data = res.data;
      setLoading(false);
      setPost(data);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchAndUpdateData();
  }, []);
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return <div>
    {posts?.map((post)=>(
        <PostCard {...post} key={post.id}/>
    ))}
  </div>;
}
