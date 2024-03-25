<template>
  <Container class="py-4">
    <PageHeading>Calendar</PageHeading>
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div class="w-full">
          <SfInput :name="$t('Search')" placeholder="Search" icon="search" class="w-full" />
        </div>
        <div
          class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <div class="flex items-center space-x-3 w-full md:w-auto">
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-4 w-4 mr-2 text-gray-400"
                viewbox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clip-rule="evenodd"
                />
              </svg>
              Filter
              <svg
                class="-mr-1 ml-1.5 w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
              <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                <li class="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >Apple (56)</label
                  >
                </li>
                <li class="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >Microsoft (16)</label
                  >
                </li>
                <li class="flex items-center">
                  <input
                    id="razor"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >Razor (49)</label
                  >
                </li>
                <li class="flex items-center">
                  <input
                    id="nikon"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >Nikon (12)</label
                  >
                </li>
                <li class="flex items-center">
                  <input
                    id="benq"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ classData.course_id }}
            </td>
            <td class="px-6 py-4">
              {{ classData.date }}
            </td>
            <td class="px-6 py-4">
              <div>{{ classData.city }}</div>
              <div>{{ classData.street_address }}</div>
            </td>
            <td class="px-6 py-4">
              {{ classData.seats_available }}
            </td>
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
import calendarData from './calendar.json';
import { SfButton, SfInput } from '@storefront-ui/vue';
</script>
