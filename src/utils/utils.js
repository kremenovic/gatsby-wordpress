const paginate = (pages, index) => {
  const itemsPerPage = 3
  const page = Math.ceil(pages.length / itemsPerPage)

  const newPage = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage
    return pages.slice(start, start + itemsPerPage)
  })

  if (!index) {
    return newPage
  } else {
    return newPage[index]
  }
}

export default paginate
