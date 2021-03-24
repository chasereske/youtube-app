import React, { useEffect, useState } from "react";

function DisplayReplies(props) {
  const [replies, updateReply] = useState(null);

  useEffect(() => {
    updateReply(props.replies);
  }, [props.replies]);

  if (!replies) return null;

  const reply = replies.map((rep) => {
    return <p>{rep.text}</p>;
  });

  return reply;
}

export default DisplayReplies;
