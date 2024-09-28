function isJSON(data) {
  var valid = true;

  try {
    JSON.parse(data);
  } catch (e) {
    valid = false;
  }

  return valid;
}

export function formatContent(data) {
  const isValidJson = isJSON(data);

  if (isValidJson) {
    const parsedData = JSON.parse(data);

    return { text: parsedData?.parts?.map(p => p?.text)?.join('') };
  }

  if (data?.content) {
    return formatContent(data?.content);
  }

  return { text: data };
}
