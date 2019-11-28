export default function extractExpression(str, responses) {
  if (!str) {
    return
  }

  const regex = /{.*?}/g
  const matches = str.match(regex)

  for (var m in matches) {
    const prop = matches[m].replace(/[{}]/g, '')
    let expr = responses.filter(obj => obj.type === prop)
    expr = expr[0].text

    str = str.replace(matches[m], expr)
  }

  return str
}
