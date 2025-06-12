"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  // first: side effect function
  // second: cleanup function
  // third: comma separated:dependencies

  // variation 1: 
  // runs on every render
  // useEffect(() => {
  //   alert("I am slash")
  // })

  // variant 2:
  // runs on first render
  // useEffect(() => {
  //   alert("run on only first render")
  // }, [])


  // variant 3:
  // useEffect(() => {
  //   alert("on everytime count is updated")
  // }, [count])

  // variant 4:
  // multiple dependencies
  useEffect(() => {
    alert("I will run everytime count/total is changed")
  }, [count, total])


  function handleClick() {
    setCount(prev => prev + 1)
  }

  function totalUpdate() {
    setTotal(prev => prev + 1)
  }

  return (
    <div className="">
      <button onClick={handleClick} className="border">update count</button>
      <br />
      Count is: {count}
      <br /><br />
      <button onClick={totalUpdate} className="border">update total</button>
      <br />
      total is: {total}
    </div>
  );
}
