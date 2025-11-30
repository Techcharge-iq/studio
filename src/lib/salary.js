/**
 * Salary calculation utilities for HRMSpark
 * Implements One Day Salary, Attendance deductions, OT pay, Gross/Net and Final calculations.
 */

function oneDaySalary(monthlySalary) {
  if (typeof monthlySalary !== 'number' || Number.isNaN(monthlySalary)) throw new Error('monthlySalary must be a number')
  return monthlySalary / 30
}

function attendanceDeductions(oneDaySalaryVal, absentDays = 0, halfDays = 0) {
  if (absentDays < 0 || halfDays < 0) throw new Error('absentDays and halfDays must be >= 0')
  const absentDeduction = oneDaySalaryVal * absentDays
  const halfDayDeduction = (oneDaySalaryVal / 2) * halfDays
  return {
    absentDeduction: round2(absentDeduction),
    halfDayDeduction: round2(halfDayDeduction),
    totalAttendanceDeductions: round2(absentDeduction + halfDayDeduction)
  }
}

function otPay(basicSalary, approvedOtHours = 0) {
  if (basicSalary < 0 || approvedOtHours < 0) throw new Error('basicSalary and approvedOtHours must be >= 0')
  // 10 hours/day * 30 days = 300 hours per month
  return round2((basicSalary / 300) * approvedOtHours)
}

function totalGross(grossMonthlySalary, otAmount = 0) {
  return round2(grossMonthlySalary + otAmount)
}

function netPayable(totalGrossSalary, totalAttendanceDeductions) {
  return round2(totalGrossSalary - totalAttendanceDeductions)
}

function finalNetSalary(netPayableSalary, outstandingBalance = 0) {
  return round2(netPayableSalary - outstandingBalance)
}

function generatePaySlip({ monthlyGross, basicSalary, absentDays = 0, halfDays = 0, approvedOtHours = 0, outstandingBalance = 0 }) {
  if ([monthlyGross, basicSalary].some(v => typeof v !== 'number' || Number.isNaN(v))) throw new Error('monthlyGross and basicSalary must be numbers')

  const oneDay = oneDaySalary(monthlyGross)
  const attendance = attendanceDeductions(oneDay, absentDays, halfDays)
  const ot = otPay(basicSalary, approvedOtHours)
  const totalGrossSalary = totalGross(monthlyGross, ot)
  const netPay = netPayable(totalGrossSalary, attendance.totalAttendanceDeductions)
  const finalSalary = finalNetSalary(netPay, outstandingBalance)

  return {
    oneDaySalary: round2(oneDay),
    attendance,
    otPay: ot,
    totalGrossSalary,
    netPayableSalary: netPay,
    finalNetSalary: finalSalary
  }
}

function round2(v) {
  return Math.round((v + Number.EPSILON) * 100) / 100
}

module.exports = {
  oneDaySalary,
  attendanceDeductions,
  otPay,
  totalGross,
  netPayable,
  finalNetSalary,
  generatePaySlip
}
