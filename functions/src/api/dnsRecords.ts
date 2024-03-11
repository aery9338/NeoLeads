// // import * as logger from "firebase-functions/logger";
// import {NextApiRequest, NextApiResponse} from "next";
// import * as dns from "dns";

// export const getDNSRecords =
// (
//   request: NextApiRequest,
//   response: NextApiResponse
// ): void =>
// {
//   const domain = request.query.domain as string;

//   if (!domain) {
//   //   logger.error("No domain specified");
//     response.status(400).send("No domain specified");
//     return;
//   }

//   // Promise wrapper for dns.resolve
//   const resolveDNS = (domain: string, recordType: string) => {
//     return new Promise((resolve, reject) => {
//       dns.resolve(domain, recordType, (err, records) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(records);
//         }
//       });
//     });
//   };

//   // Perform DNS lookups for various record types
//   Promise.all([
//     resolveDNS(domain, "A"),
//     resolveDNS(domain, "MX"),
//     resolveDNS(domain, "NS"),
//     resolveDNS(domain, "TXT"),
//   ])
//     .then((results) => {
//       response.send({
//         A: results[0],
//         MX: results[1],
//         NS: results[2],
//         TXT: results[3],
//       });
//     })
//     .catch((err) => {
//       response.status(500).send(`Error resolving DNS records: ${err}`);
//     });
// };

// export const checkDNSRecords = (response: any) => {
//   // Define the records to check
//   const recordsToCheck = {
//     TXT: [
//       {
//         domain: "neolen.co.in",
//         expectedValue: "v=spf1 include:neoleads.org ~all",
//       },
//       {
//         domain: "mailo._domainkey.neolen.co.in",
//         expectedValue: "k=rsa; p=MIGfMA0...",
//       },
//     ],
//     MX: [
//       {
//         domain: "neolen.co.in",
//         expectedValue: "mxa.neoleads.org",
//         priority: 10
//       },
//       {
//         domain: "neolen.co.in",
//         expectedValue: "mxb.neoleads.org",
//         priority: 10
//       },
//     ],
//     CNAME: [{domain: "email.neolen.com", expectedValue: "neoleads.org"}],
//   };

//   // Promise wrapper for dns.resolve
//   const resolveDNS = (domain: string, recordType: string) => {
//     return new Promise((resolve, reject) => {
//       dns.resolve(domain, recordType, (err, records) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve({domain, recordType, records});
//         }
//       });
//     });
//   };

//   // Check each record
//   const checkRecords = async () => {
//     const results = [];

//     for (const [type, records] of Object.entries(recordsToCheck)) {
//       for (const record of records) {
//         try {
//           const result = (await resolveDNS(record.domain, type)) as any;
//           let isRecordValid = false;

//           if (type === "TXT" || type === "CNAME") {
//             // eslint-disable-next-line
//             isRecordValid = result.records.includes(record.expectedValue);
//           } else if (type === "MX") {
//             // eslint-disable-next-line
//             isRecordValid = result.records.some(
//               (mxRecord: any) =>
//                 mxRecord.exchange === record.expectedValue &&
//                 mxRecord.priority === (record as any).priority
//             );
//           }
//           // eslint-disable-next-line
//           results.push({ ...result, isRecordValid });
//         } catch (err) {
//           results.push(err);
//         }
//       }
//     }

//     return results;
//   };

//   checkRecords()
//     .then((results) => {
//       response.send(results);
//     })
//     .catch((err) => {
//       response.status(500).send(`Error checking DNS records: ${err}`);
//     });
// };
