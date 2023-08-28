/**
 *
 * @param param.condition { boolean } 判断条件 c
 * @param param.onTrue { JSX.Element } 满足 condition 时返回的View
 * @param param.onFalse { JSX.Element } 不满足 condition 时返回的View
 * @returns {JSX.Element} 与condition满足onTrue/onFalse中的一项
 */
export default function Selection({
  condition,
  onTrue,
  onFalse,
}: {
  condition: boolean;
  onTrue?: JSX.Element;
  onFalse?: JSX.Element;
}): JSX.Element | null {
  if (condition) {
    return onTrue || null;
  } else {
    return onFalse || null;
  }
}
