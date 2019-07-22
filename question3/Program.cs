using System;
using System.Collections.Generic;

namespace question3
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(string.Join(", ", FindDuplicates(new int[] { 3, 1, 1, 3 }).ToArray()));
        }
        public static List<int> FindDuplicates(int[] numberArr)
        {
            Dictionary<int, int> cache = new Dictionary<int, int>();
            var result = new List<int>();
            for (int i = 0; i < numberArr.Length; i++)
            {
                if (cache.ContainsKey(numberArr[i]))
                {
                    cache[numberArr[i]]++;
                }
                else
                {
                    cache[numberArr[i]] = 1;
                }
            }
            foreach (var key in cache.Keys)
            {
                if (cache[key] >= 2)
                {
                    result.Add(key);
                }

            }
            return result;
        }
    }
}


