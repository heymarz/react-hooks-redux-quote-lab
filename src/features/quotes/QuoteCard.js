import React from "react";
import {upvoteQuote, downvoteQuote, removeQuote} from "./quotesSlice";
import {useDispatch} from "react-redux"

function QuoteCard(props) {
  const dispatch = useDispatch();

  function handleUpvoteClick(){
    dispatch(upvoteQuote(props.quote.id))
  }

  function handleDownvoteClick(){
    dispatch(downvoteQuote(props.quote.id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button onClick={handleUpvoteClick} type="button" className="btn btn-primary">
              Upvote
            </button>
            <button onClick={handleDownvoteClick} type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
