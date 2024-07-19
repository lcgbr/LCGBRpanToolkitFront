// ARQUIVO TEMPORÁRIO!!!
// Essa implementação foi feita apenas para garantir que o toolkit continue funcionando durante a fase de migração da estrutura de atividades do target

export function sortByPriorityAndStartDate(array) {
  return array.sort((a, b) => {
    const startDateA = new Date(a.details.content.scheduling.startsAt || 0);
    const startDateB = new Date(b.details.content.scheduling.startsAt || 0);

    if (b.position === a.position) {
      return startDateA - startDateB;
    }
    return b.position - a.position;
  });
}

export function categorizeActivities(activities) {

  const hasPipe = activities[0].name.includes('|');
  const hasParentheses = (activities[0].name.includes('(') || activities[0].name.includes(')'));

  if (!hasPipe && hasParentheses) {
    return activities;
  }

  const now = new Date();
  const [mainTitle] = activities[0].name.split(' | ');
  
  const result = [];
  const live = {
    id: [],
    name: `live | ${mainTitle}`,
    state: 'approved',
    priority: 0,
    startsAt: '',
    endsAt: '',
    options: []
  };
  const scheduled = {
    id: [],
    name: `scheduled | ${mainTitle}`,
    state: 'approved',
    priority: 0,
    startsAt: '',
    endsAt: '',
    options: []
  };
  const expired = {
    id: [],
    name: `expired | ${mainTitle}`,
    state: 'approved',
    priority: 0,
    startsAt: '',
    endsAt: '',
    options: []
  };

  activities.forEach((activity) => {
    const startsAt = activity.startsAt ? new Date(activity.startsAt) : null;
    const endsAt = activity.endsAt ? new Date(activity.endsAt) : null;

    const isStartDateMissing = !startsAt;
    const isEndDateMissing = !endsAt;
    const isNowAfterStart = startsAt && now >= startsAt;
    const isNowBeforeEnd = endsAt && now <= endsAt;
    const isNowAfterEnd = endsAt && now > endsAt;

    const isLive = isStartDateMissing || (isNowAfterStart && (isEndDateMissing || isNowBeforeEnd));

    if (isLive) {
      live.id.push(activity.id);
      const offers = activity.options.map((offer) => {
        offer.position = activity.priority;
        offer.details.content['scheduling'] = {};
        offer.details.content.scheduling['startsAt'] = activity.startsAt;
        offer.details.content.scheduling['endsAt'] = activity.endsAt;
        return offer;
      });
      live.options.push(...offers);
    } else if (isNowAfterEnd) {
      expired.id.push(activity.id);
      const offers = activity.options.map((offer) => {
        offer.position = activity.priority;
        offer.details.content['scheduling'] = {};
        offer.details.content.scheduling['startsAt'] = activity.startsAt;
        offer.details.content.scheduling['endsAt'] = activity.endsAt;
        return offer;
      });
      expired.options.push(...offers);
    } else {
      scheduled.id.push(activity.id);
      const offers = activity.options.map((offer) => {
        offer.position = activity.priority;
        offer.details.content['scheduling'] = {};
        offer.details.content.scheduling['startsAt'] = activity.startsAt;
        offer.details.content.scheduling['endsAt'] = activity.endsAt;
        return offer;
      });
      scheduled.options.push(...offers);
    }
  });

  sortByPriorityAndStartDate(live.options), 
  result.push(live);

  if (scheduled.options.length) {
    sortByPriorityAndStartDate(scheduled.options),
    result.push(scheduled);
  }

  if (expired.options.length) {
    sortByPriorityAndStartDate(expired.options);
    result.push(expired);
  }

  return result;
}