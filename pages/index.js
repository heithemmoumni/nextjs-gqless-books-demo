import React, { Suspense } from 'react'
import { query, books } from "../graphql";
import { graphql } from "@gqless/react";

const Books = graphql(() => {
  return (
    <div>
      {query.books.map(book => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </div>
  );
});
export default function Home() {
  return (
    <div>
      <Suspense fallback="loading">
        <Books />
      </Suspense>
    </div>
  );
}
