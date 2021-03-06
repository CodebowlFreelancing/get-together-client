export const clearCustomValidity = event => event.target.setCustomValidity('')

export const titleCustomValidity = event => event.target.setCustomValidity('Please fill title field.')

export const daterangeCustomValidity = dateRange => {
  dateRange.setCustomValidity('Please add at least one date or daterange.')
  dateRange.reportValidity()
}
