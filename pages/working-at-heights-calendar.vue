<template>
  <Container class="py-4">
    <PageHeading>Calendar</PageHeading>
    <div>
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Course</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Location</th>
            <th scope="col" class="px-6 py-3">Seats Available</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="classData in calendarData"
            :key="classData.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ classData.course_id }}
            </td>
            <td class="px-6 py-4">{{ classData.date }}</td>
            <td class="px-6 py-4">
              <div>{{ classData.city }}</div>
              <div>{{ classData.street_address }}</div>
            </td>
            <td class="px-6 py-4">{{ classData.seats_available }}</td>
            <td class="px-6 py-4">
              <SfButton variant="secondary"> View </SfButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Container>
</template>
<script lang="ts" setup>
import calendarData from "./calendar.json";
import { SfButton } from "@storefront-ui/vue";
</script>
