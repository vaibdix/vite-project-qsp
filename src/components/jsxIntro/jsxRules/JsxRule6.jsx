import JsxExpressionRule1 from "./JsxExpression/JsxExpressionRule1"
import JsxExpressionRule2 from "./JsxExpression/JsxExpressionRule2"

export default function JsxRule6() {
  let val = 99
  return(
    <div>
      <h4> Rule 6 </h4>
      <p>this is jsx expression and can use js in just { } rather than doing string interpolation in traditional js</p>
      { val }
      <JsxExpressionRule1 />
      <JsxExpressionRule2 />
    </div>
  )
}
