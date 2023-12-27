export function calculateAge(
  birthDate: Date,
  otherDate: Date = new Date()
): number {
  birthDate = new Date(birthDate);
  otherDate = new Date(otherDate);

  let years = otherDate.getFullYear() - birthDate.getFullYear();

  if (
    otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() == birthDate.getMonth() &&
      otherDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}
