const assert = require('assert')
const salary = require('../src/lib/salary')

function run() {
  console.log('Running salary calculation tests...')

  // Test 1: standard case
  const input1 = { monthlyGross: 3000, basicSalary: 1500, absentDays: 2, halfDays: 1, approvedOtHours: 5, outstandingBalance: 100 }
  const slip1 = salary.generatePaySlip(input1)

  assert.strictEqual(slip1.oneDaySalary, 100, 'One day salary should be 100')
  assert.strictEqual(slip1.attendance.absentDeduction, 200)
  assert.strictEqual(slip1.attendance.halfDayDeduction, 50)
  assert.strictEqual(slip1.attendance.totalAttendanceDeductions, 250)
  // OT = (basic / 300) * 5 = (1500/300)*5 = 5*5 = 25
  assert.strictEqual(slip1.otPay, 25)
  assert.strictEqual(slip1.totalGrossSalary, 3025)
  assert.strictEqual(slip1.netPayableSalary, 2775)
  assert.strictEqual(slip1.finalNetSalary, 2675)

  // Test 2: zero salary
  const input2 = { monthlyGross: 0, basicSalary: 0 }
  const slip2 = salary.generatePaySlip(input2)
  assert.strictEqual(slip2.oneDaySalary, 0)
  assert.strictEqual(slip2.otPay, 0)
  assert.strictEqual(slip2.finalNetSalary, 0)

  // Test 3: more OT than 0
  const input3 = { monthlyGross: 1000, basicSalary: 1000, approvedOtHours: 30 } // OT = (1000/300)*30 = (3.333...)*30 = 100
  const slip3 = salary.generatePaySlip(input3)
  assert.strictEqual(slip3.otPay, 100)

  console.log('All tests passed ✅')
}

try {
  run()
} catch (err) {
  console.error('Test failed:', err.message)
  process.exit(1)
}
