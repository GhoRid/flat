// 숫자 포매팅
export const onlyDigits = (v: string) => v.replace(/\D+/g, "");

// 한국 원화 포매팅
export const formatKrw = (value: number) => value.toLocaleString("ko-KR");

// 전화번호 포매팅 (예: 010-1234-5678)
export const formatPhone = (v: string) => {
  const d = onlyDigits(v).slice(0, 11); // cap to 11 digits
  if (d.length <= 3) return d;
  if (d.length <= 7) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
};

// 날짜를 YYMMDD(예: 251229) 형식으로 변환
export const formatToYYMMDD = (date: Date) => {
  const year = String(date.getFullYear()).slice(2); // 뒤 2자리
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

/**
 * ISO 문자열/Date를 "YYYY-MM-DD HH:mm:ss"로 포맷한다.
 * 기본 타임존은 Asia/Seoul.
 */
export function formatToYmdHms(
  input: string | number | Date,
  opts: { timeZone?: string } = { timeZone: "Asia/Seoul" }
): string {
  const { timeZone = "Asia/Seoul" } = opts;

  const date = input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // 안전하게 조각(parts)으로 받아 조합
  const parts = fmt.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const yyyy = get("year");
  const mm = get("month");
  const dd = get("day");
  const HH = get("hour");
  const MM = get("minute");
  const SS = get("second");

  return `${yyyy}-${mm}-${dd} ${HH}:${MM}:${SS}`;
}

/**
 * ISO 문자열/Date를 "YYYY-MM-DD"로 포맷한다.
 * 기본 타임존은 Asia/Seoul.
 */
export function formatToYmd(
  input: string | number | Date,
  opts: { timeZone?: string } = { timeZone: "Asia/Seoul" }
): string {
  const { timeZone = "Asia/Seoul" } = opts;

  const date = input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // "YYYY-MM-DD" 형식 문자열 반환
  return fmt.format(date); // en-CA locale은 기본이 "YYYY-MM-DD"
}

/**
 * NV-CAT 스타일 일시 문자열(예: "251031154412")을
 * "YYYY-MM-DD HH:mm" 형식으로 변환한다.
 *
 * 형식: YYMMDDHHmm[ss]
 *   - 앞 2자리: 연(20xx 기준)
 *   - 다음 2자리: 월
 *   - 다음 2자리: 일
 *   - 다음 2자리: 시
 *   - 다음 2자리: 분
 *   - 나머지 2자리는(있다면) 초로 취급하지만 출력에는 사용하지 않는다.
 */
export function formatYYMMDDHHSSToYmdHm(raw: string): string {
  const d = onlyDigits(raw);

  // 최소 YYMMDDHHmm(10자리)는 있어야 함
  if (d.length < 10) {
    return "-";
  }

  const yy = d.slice(0, 2);
  const MM = d.slice(2, 4);
  const dd = d.slice(4, 6);
  const HH = d.slice(6, 8);
  const mm = d.slice(8, 10);

  const yyyy = `20${yy}`;

  return `${yyyy}-${MM}-${dd} ${HH}:${mm}`;
}

export const secToDhms = (totalSeconds: number, lang = "eng") => {
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  if (lang !== "kor") {
    if (days >= 1) {
      return `${days}D ${pad(hours)}:${pad(minutes)}`;
    }
  } else {
    if (days >= 1) {
      return `${days}일 ${pad(hours)}시 ${pad(minutes)}분`;
    }
  }

  // days가 0이면 "23:10:22" 형태 (시:분:초)
  if (lang === "kor") {
    return `${pad(hours)}시 ${pad(minutes)}분 ${pad(seconds)}초`;
  }
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
