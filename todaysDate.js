const todaysDate = async() => {
  const dateFormatted = await new Date(Date.now())
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('. ')
    .join('-')
    .slice(0, -1);
  console.log(dateFormatted, 'date formatted');
  return dateFormatted;
};

export default todaysDate;
