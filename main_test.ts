import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function f2() {
  assertEquals("a", "A");
});
