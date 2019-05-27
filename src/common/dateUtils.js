export const displayDate = date => (date ? date.toLocaleDateString() : '')

export const displayDateString = dateString => displayDate(new Date(dateString))
