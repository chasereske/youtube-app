import React from "react";

function DisplayReplies({ replies }) {
  // const [repliesNum, setReplies] = useState(replies);

  // useEffect(() => {
  //   likeComment();
  //   dislikeComment();
  //   setReplies(`${replies + 1}`);
  // });

  if (!replies) return null;

  const reply = replies.map((rep, index) => (
    <p className="reply" key={index}>
      {rep.text}
    </p>
  ));

  return reply;
}

export default DisplayReplies;
