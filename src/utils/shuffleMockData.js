function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate (start, end) {
  const randomTime = getRandomInt(start.getTime(), end.getTime());
  return new Date(randomTime).toISOString();
}

const adjustDate = (date, days) => {
  const clone = new Date(date); // Create a copy of the date
  clone.setDate(clone.getDate() + days); // Adjust the date by 'days'
  return clone;
};

export function shuffleMockData(data) {
  const transformedData = data.map((item) => {
    // Update priority
    const newPriority = getRandomInt(50, 950);
    item.priority = newPriority;

    // Randomly determine scheduling status
    const newScheduling = Math.random() < 0.5 ? 'live' : 'scheduled';
    item.scheduling = newScheduling;

    const NOW = new Date();

    // Update options array
    item.options.forEach((option) => {
      option.ordination.priority = newPriority;
      option.scheduling.status = newScheduling;

      if (newScheduling === 'live') {
        const liveStart = adjustDate(NOW, -30); // 30 days ago
        const liveEnd = adjustDate(NOW, -1); // Yesterday
        item.startsAt = getRandomDate(liveStart, liveEnd);
        option.scheduling.startsAt = getRandomDate(liveStart, liveEnd);
      } else {
        const scheduledStart = adjustDate(NOW, 1); // Tomorrow
        const scheduledEnd = adjustDate(NOW, 30); // 30 days ahead
        item.startsAt = getRandomDate(scheduledStart, scheduledEnd);
        option.scheduling.startsAt = getRandomDate(scheduledStart, scheduledEnd);
      }
    });

    return item;
  });

  // Sort by descending priority
  transformedData.sort((a, b) => b.priority - a.priority);

  const slicePoint = getRandomInt(9, data.length - 1);

  return transformedData.slice(0, slicePoint);
}
