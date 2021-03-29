import React, { useEffect, useState } from "react";

function ReplyTextBox(props) {
  const [showReplyBox, setShowReplyBox] = useState(props.showReplyBox);
  const [displayForm, setDisplayForm] = useState(null);

  const textForm = (
    <form onSubmit={postReply}>
      <textarea name="reply"></textarea>
      <button onClick={cancelReply}>Cancel</button>
      <button type="submit">Reply</button>
    </form>
  );

  // CANCEL REPLY
  function cancelReply() {
    setShowReplyBox(false);
  }

  // SUBMIT REPLY
  function postReply() {
    alert(`Reply submitted`);
  }

  if (!showReplyBox) {
    setDisplayForm(null);
  }

  if (showReplyBox) {
    setDisplayForm(textForm);
  }

  return displayForm;
}

export default ReplyTextBox;
