import { assert, test } from "vitest"
import { bar, foo } from "../src"

test("simple", () => {
  assert.equal(foo, "foo")
})

test("simple 2", () => {
  assert.equal(bar, "bar")
})
